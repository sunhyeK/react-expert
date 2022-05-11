function IsRender({ isRender }) {
  return (
    <div>
      {isRender === true ? (
        <div>sophie님 안녕하세요.</div>
      ) : (
        <div>비회원에게 공개되지 않은 페이지입니다.</div>
      )}
      {isRender ? <button>hide</button> : null}
    </div>
  );
}

export default IsRender;
