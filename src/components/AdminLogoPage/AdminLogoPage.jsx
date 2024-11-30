/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import noImg from "../../assets/noImg.webp";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../apis/firebase/config/firebaseConfig";
import { getPrincipalRequest } from "../../apis/api/principal";
import { useMenuRegisterInput } from "../../hooks/useMenuRegisterInput";
import { registerLogoRequest } from "../../apis/api/logo";

function AdminLogoPage() {
    // useAuthCheck()
    const [newImgFile, setNewImgFile] = useState("");
    const newImgRef = useRef();
    const imgUrl = useMenuRegisterInput();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const nowImgQuery = useQuery(["nowImgQuery"], () => getPrincipalRequest(1), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setNewImgFile(response.data);
            console.log(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleImgChange = (e) => {
        const files = Array.from(e.target.files);
        console.log(e.target.value);

        if (files.length === 0) {
            e.target.value = "";
            return;
        }

        Swal.fire({
            title: "파일을 업로드 하시겠습니까?",
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: "warning",

            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
            cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
            confirmButtonText: "업로드", // confirm 버튼 텍스트 지정
            cancelButtonText: "취소", // cancel 버튼 텍스트 지정

            reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) {
                // 만약 모달창에서 confirm 버튼을 눌렀다면

                Swal.fire("업로드가 완료되었습니다.", "", "success");
                const storageRef = ref(
                    storage,
                    `admin/img/${uuid()}_${files[0].name}`
                );
                const uploadTask = uploadBytesResumable(storageRef, files[0]);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {},
                    (error) => {},
                    () => {
                        Toast.fire({
                            icon: "success",
                            title: "성공적으로 업로드가 완료되었습니다.",
                        });
                        getDownloadURL(storageRef).then((url) => {
                            imgUrl.setValue(() => url);
                            console.log(url);
                        });
                    }
                );
            }
        });
    };

    const registerLogoMutation = useMutation({
        mutationKey: "registerLogoMutation",
        mutationFn: registerLogoRequest,
        onSuccess: (response) => {
            Toast.fire({
                icon: "success",
                title: "성공적으로 등록 완료되었습니다.",
            });
            window.location.replace("/admin/setting");
        },
        onError: (error) => {},
    });

    const handleSubmitClick = () => {
        registerLogoMutation.mutate({
            imgUrl: imgUrl.value,
        });
    };

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <div css={s.title}>로고 변경하기</div>
            </div>
            <div css={s.buttonLayout}>
                <button css={s.button} onClick={() => handleSubmitClick()}>
                    저장
                </button>
            </div>
            <div css={s.ImgLayout}>
                <div css={s.ImgContainer}>
                    <div css={s.ImgBox}>
                        <img css={s.Img} src={newImgFile.imgUrl} alt="" />
                    </div>
                    </div>
                <div css={s.arrowBox}>
                    <div css={s.arrow}>
                        <FaArrowRight />
                    </div>
                </div>
                <div css={s.ImgContainer}>
                    <div css={s.ImgBox}>
                        <input
                            type="file"
                            onChange={handleImgChange}
                            style={{ display: "none" }}
                            ref={newImgRef}
                        />
                        <img
                            css={s.Img}
                            src={imgUrl.value ? imgUrl.value : noImg}
                            onClick={() => newImgRef.current.click()}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogoPage;