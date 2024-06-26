import { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import PropTypes from 'prop-types';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import styles from './ImageEditor.module.scss';

const ImageEditor = ({ uploadedImage, closeModal, setCroppedImage }) => {
    const cropperRef = useRef(null);

    const getCropData = () => {
        if (cropperRef.current) {
            const cropper = cropperRef.current.cropper;
            if (cropper && cropper.getCroppedCanvas) {
                cropper.getCroppedCanvas().toBlob((blob) => {
                    const file = new File([blob], 'croppedImage.png', { type: 'image/png' });
                    setCroppedImage(file);
                    closeModal();
                }, 'image/png');
            }
        }
    };

    return (
        <Modal closeFn={closeModal}>
            <h3 className={styles.title}>이미지 자르기</h3>
            <Modal.Body>
                <div className='cropContainer'>
                    <Cropper
                        ref={cropperRef}
                        zoomTo={1}
                        aspectRatio={1}
                        src={uploadedImage}
                        viewMode={1}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                        guides={false}
                        data={{ width: '100%' }}
                    />
                </div>
            </Modal.Body>
            <Modal.Button>
                <Button type="button" label="자르기" variant="active" onClick={getCropData} />
            </Modal.Button>
        </Modal>
    );
};

ImageEditor.propTypes = {
    uploadedImage: PropTypes.node,
    closeModal: PropTypes.func.isRequired,
    setCroppedImage: PropTypes.func.isRequired
};

export default ImageEditor;