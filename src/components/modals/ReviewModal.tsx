import StarRating from '@components/common/StarRating';

function ReviewModal() {
  return (
    <>
      <h2
        data-testid="title"
        className="border border-transparent border-b-gray-300 py-6 text-center text-2xl font-bold text-gray-600"
      >
        리뷰작성
      </h2>
      <div data-testid="main-section" className="flex flex-col gap-6 p-6">
        <section
          data-testid="product-info"
          className="flex gap-4 rounded-sm bg-gray-100 p-4"
        >
          <div className="h-20 w-20 rounded-sm bg-gray-300" />
          <div className="flex flex-col justify-center gap-2 text-lg">
            <h3>문라이트 야광반사 농구공</h3>
            <span className="font-bold">29,200원</span>
          </div>
        </section>
        <section data-testid="product-satisfaction">
          <span className="question block py-4 text-center text-lg font-semibold">
            상품은 만족하셨나요?
          </span>
          <StarRating />
        </section>
        <section data-testid="product-review">
          <label className="question block py-4 text-center text-lg font-semibold">
            리뷰글을 작성해주세요.
            <textarea
              className="borer mt-6 flex min-h-[12rem] w-full border-gray-200 bg-gray-100 p-4 outline-none"
              placeholder="최소 10자 이상 작성해주세요."
            />
          </label>
        </section>
        <section data-testid="product-attachment">
          <label
            htmlFor="photo-attach"
            className="question block w-full border border-dashed border-gray-300 p-4 text-center text-lg font-semibold hover:cursor-pointer hover:bg-gray-50"
          >
            사진 첨부하기
          </label>
          <input id="photo-attach" type="file" className="hidden" />
        </section>
        <section
          data-testid="modal-toolbar"
          className="flex justify-between gap-4"
        >
          <button className="flex w-full items-center justify-center rounded-sm border border-gray-200 p-4 font-semibold">
            취소
          </button>
          <button className="flex w-full items-center justify-center rounded-sm bg-gray-900 p-4 text-center font-semibold text-white">
            확인
          </button>
        </section>
      </div>
    </>
  );
}

export default ReviewModal;
