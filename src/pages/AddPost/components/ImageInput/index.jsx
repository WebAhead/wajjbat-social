import React from 'react';
import axios from 'axios';
import Dropzone from '../Dropzone';

export default function UploadInput({ onChange, onError, height, width, multiple, onChangeMultiple }) {
    const uploadFile = (file, signedRequest, url) => axios
        .put(signedRequest, file, {
            headers: {
                'Content-Type': file.type,
            },
        })
        .then((res) => {
            if (res.status === 200) {

                if (multiple) {
                    return url
                }

                return onChange(url);

            }

            return onError('Could not upload file.');

        })
        .catch((error) => console.log(error));

    const getSignedRequest = (files) => {
        if (multiple) {
            Promise.all(
                files.map((file) => axios.get(`${process.env.REACT_APP_API_URL}/api/sign-s3?file-name=${file.name}&file-type=${file.type}`)),
            )
                .then((res) => Promise.all(res.map((file, i) => uploadFile(files[i], file.data.signedRequest, file.data.url)))
                    .then((images) => onChangeMultiple(images))
                    .catch((err) => console.log(err)))
                .catch((err) => console.log(err))
        } else {

            axios
                .get(
                    `${process.env.REACT_APP_API_URL}/api/sign-s3?file-name=${files[0].name}&file-type=${files[0].type}`,
                )
                .then((res) => {
                    if (res.status === 200) {
                        uploadFile(files[0], res.data.signedRequest, res.data.url);
                    } else {
                        onError('Could not get signed URL.');
                    }
                })
                .catch((error) => error);
        }
    }

    return (
        <div>
            <Dropzone
                width={width}
                height={height}
                getSignedRequest={getSignedRequest}
                multiple
            />
        </div>
    );
}
