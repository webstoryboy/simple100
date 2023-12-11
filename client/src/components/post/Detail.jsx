import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Detail = () => {
    const [postInfo, setPostInfo] = useState({});
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        let body = {
            postNum: params.postNum
        }

        axios.post('/api/post/detail', body)
            .then((response) => {
                console.log(response);
                setPostInfo(response.data.post);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params.postNum]);

    const DeleteHandler = () => {
        if (window.confirm('정말로 삭제하기겠습니까?')) {
            let body = {
                postNum: params.postNum,
            }
            axios
                .post('/api/post/delete', body)
                .then((resonpse) => {
                    if (resonpse.data.success) {
                        alert('게시글이 삭제되었습니다.')
                        navigate('/list')
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert('게시글 삭제가 실패했습니다.')
                })
        }
    }

    return (
        <div className='detail__wrap'>
            <div className='detail__title'>
                <h3>{postInfo.title}</h3>
                <span className='auth'>웹쓰</span>
            </div>
            <div className='detail__content'>
                {postInfo.image ? <img src={postInfo.image} alt={postInfo.title} /> : null}
                {postInfo.content}
            </div>
            <div className='detail__btn'>
                <Link to={`/modify/${postInfo.postNum}`}>
                    수정
                </Link>
                <button onClick={() => DeleteHandler()}>삭제</button>
                <Link to='/list'>목록</Link>
            </div>
        </div>
    )
}

export default Detail