import InquiryPNG from '../../../assets/images/Inquiry.png';
import InquiryWEBP from '../../../assets/images/Inquiry.webp';
import InquiryAVIF from '../../../assets/images/Inquiry.avif';
import './Introduce.scss';


function Introduce() {

    return (
        <section className='introduce'>

            <div className="introduce__title">
                <h2>알고리즘 먼데이란?</h2>
            </div>
            <div className="introduce-content">
                <span className='introduce-content__text'>매주 월요일마다 따끈따끈한 알고리즘 문제가 공개됩니다.</span>
                <span className='introduce-content__text'>경쟁보다, 점수보다 중요한 건 <strong className='introduce-content__strong'>꾸준히 매일</strong> 푸는 것!</span>
                <span className='introduce-content__text'>8주 동안 진행되는 챌린지로 나만의 알고리즘 학습 루틴을 만들어보는 것은 어떨까요?</span>
                <span className='introduce-content__text'>매주 조금씩 성장하는 자신을 발견하게 될 거예요.</span>

            </div>
            <picture>
                <source
                    className="introduce__inquiry-img"
                    srcSet={InquiryAVIF}
                    type="image/avif"
                />
                <source
                    className="introduce__inquiry-img"
                    srcSet={InquiryWEBP}
                    type="image/webp"
                />
                <img
                    className="introduce__inquiry-img"
                    src={InquiryPNG}
                    srcSet={InquiryPNG}
                    type="image/png"
                />
            </picture>
        </section>
    )
}

export default Introduce;