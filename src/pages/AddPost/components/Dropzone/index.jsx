import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const activeStyle = {
    borderColor: 'yellow',
};

const acceptStyle = {
    borderColor: '#00e676',
};

const rejectStyle = {
    borderColor: '#ff1744',
};

export default function StyledDropzone(props) {


    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        height: '80px',
        outline: 'none',
        transition: 'border .24s ease-in-out',
        ...(props.width && { width: props.width }),
    };


    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        accept: 'image/*',
        onDrop: (files) => {
            if (Array.isArray(files) && files.length) {
                if (props.multiple) {
                    props.getSignedRequest(files);
                } else {

                    props.getSignedRequest(files[0]);
                }

            }
        },
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragAccept, isDragActive, isDragReject],
    );

    return (
        <div className="dropzone-container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <i className="fas fa-camera-retro imageIcon"/>
            </div>
        </div>
    );
}
