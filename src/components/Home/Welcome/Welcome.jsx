import Link from 'next/link'
import './Welcome.css'

const Welcome = () => {
  return (
    <section className="bg-welcome">
        
        <div className="mx-auto container p-4 transition-all">

        <div className="box my-6 px-4 py-4 lg:hidden">

            <div className="flex flex-col gap-4">
                 <h2 className="p1 text-xl">Welcome To S.Kijchai</h2>
                 <h1 className="text-3xl font-semibold">ประวัติเกี่ยวกับ ส.กิจชัย</h1>
                 <p className='secondaryText pr-8'>หนึ่งในผู้นำทางด้านการผลิตแผ่นไม้ทดแทนธรรมชาติ 
                 ในภูมิภาคเอเชียตะวันออกเฉียงใต้ภายใต้การบริหาร 
                 ที่ยึดหลักธรรมาภิบาลที่ดี และมาตรฐานการผลิตที่มีคุณภาพสู่ความยั่งยืนของธรรมชาติสิ่งแวดล้อม
                 และสังคม</p>
            </div>

        </div>

            {/* flex */}
            <div className="flex flex-col md:flex-row md:mt-8 lg:gap-8">
              
                <div className="flex-1 md:max-w-[45%] lg:max-w-[40%] xl:max-w-[45%]">
                    <Link href="" >
                        <div className="bg-about bg1">
                            <p className='menuTextbox'>ประวัติ <br/> ความเป็นมา ส.กิจชัย</p>
                        </div>
                    </Link>
                </div>

                {/* right */}
                <div className="flex-1">
                    {/* row */}
                    <div className="">
                        {/* text welcome */}
                        <div className="hidden lg:block box px-4 py-4 my-6">
                            <div className="flex flex-col gap-4 mx-auto max-w-xl">
                                <h2 className="p1 text-xl">Welcome To S.Kijchai</h2>
                                <h1 className="text-3xl font-semibold">ประวัติเกี่ยวกับ ส.กิจชัย</h1>
                                <p className='secondaryText pr-8'>หนึ่งในผู้นำทางด้านการผลิตแผ่นไม้ทดแทนธรรมชาติ 
                                ในภูมิภาคเอเชียตะวันออกเฉียงใต้ภายใต้การบริหาร 
                                ที่ยึดหลักธรรมาภิบาลที่ดี และมาตรฐานการผลิตที่มีคุณภาพสู่ความยั่งยืนของธรรมชาติสิ่งแวดล้อม
                                และสังคม</p>
                            </div>
                        </div>

                    <div className="flex mt-12 gap-10 flex-col md:flex-row md:ml-4 md:gap-5 ">
                    <div className="w-full">
                            <Link href="">
                            <div className="bg-about bg2 md:mt-8 xl:mt-24">
                                <p className='menuTextbox'>วิสัยทัศน์ <br/> องค์กร</p>
                            </div>
                            </Link>
                        </div>

                        <div className="w-full">
                            <Link href="" >
                            <div className="bg-about bg3">
                                <p className='menuTextbox'>โครงสร้าง <br/> การจัดการ</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Welcome