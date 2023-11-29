import React, {useRef} from 'react'


const UploadImage = ({onSaveImageUrl}) => {
    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
            current.src = e.target.result;
        };
        onSaveImageUrl(file.name) // pass the name up to formData state in CreateProject
        reader.readAsDataURL(file);
        }
    };
    return (
    <div>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
        />
        <div
            style={{
                height: "20rem",
                width: "100%",
                border: "1px dashed black"
            }}
            onClick={() => imageUploader.current.click()}
        >
            Click to upload Image
            <img 
                className='image-fluid'
                ref={uploadedImage} 
                style={{
                    height: "15rem",
                    width: "100%",
                }}  
            />
        </div>  
    </div>
    )
    }

export default UploadImage