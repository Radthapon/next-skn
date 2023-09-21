import './Hero.css'

const Hero = () => {
  return (
    <div className="bg-hero relative">
        <div className="text-context lg:px-[10%] lg:items-start lg:text-start
        flex flex-col justify-center items-center text-center leading-7 w-full">
            <div className="flex mb-4 flex-col sm:flex-row lg:flex-col min-[1200px]:flex-row lg:items-start items-center justify-center gap-2">
            <h1 className="text-hero p1">S.KIJCHAI</h1>
            <h2 className="text-hero p2">ENTERPRISE</h2>
            </div>
            <h1 className="text-hero p3 mb-8">Public Company Limited</h1>
            <p className="primaryText max-w-md md:max-w-full m-auto w-[90%] md:w-[50%] lg:w-[35%] min-[1200px]:w-[45%] lg:m-0 lg:mt-5">
                ด้วยประสบการณ์และความเชี่ยวชาญในอุตสาหกรรมแปรรูปไม้มายาวนานกว่า 
                30 ปี จึงเข้าใจเกี่ยวกับผลิตภัณฑ์แปรรูปแผ่นไม้เป็นอย่างดี 
                ซึ่งบริษัทดำเนินงานภายใต้นโยบายที่มุ่งสร้างผลิตภัณฑ์ที่มีคุณภาพ
            <span className="primaryText hidden min-[1200px]:inline">
                จากมาตรฐานการผลิตระดับสากล และมุ่งเน้นการพัฒนากระบวนการผลิตให้มีระยะเวลาที่สั้น
                ควบคุมปริมาณการใช้วัตถุดิบให้มีประสิทธิภาพสูงสุด
            </span>
            </p>
        </div>
    </div>
  )
}

export default Hero