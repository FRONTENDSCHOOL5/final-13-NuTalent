/**
 * 파일 사이즈와 포맷의 유효성 검사 함수
 * @param {File} image - 검사할 이미지 파일
 * @returns {boolean} - 파일의 크기가 10MB이하, 이미지면 'true', 아니면 'false'를 반환
 */
export default function imageValidation(image) {

  // console.log(image, 121212)
  if (image.size > 10 * 1024 * 1024) {
    alert('10MB를 초과하는 이미지는 업로드 할 수 없습니다.');
    return false;
  } else if (!image.name.match(/(.*)\.(jpg|gif|png|jpeg|bmp|tif|heic)$/i)) {
    alert(
      '이미지 파일(*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)만 업로드 할 수 있습니다.',
    );
    return false;
  } else {
    return true;
  }
}
