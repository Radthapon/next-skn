import React from 'react'
import './ProductsFeatures.css'
import Image from 'next/image'

const ProductsFeatures = () => {
  return (
    <section className="bg-product">
       
            <div className="container mx-auto p-4 pt-44">

                <div className="flex flex-col">
                    {/* text product */}
                    <div className="px-4 py-4 xl:max-w-4xl xl:mx-auto">
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-3xl font-semibold text-white">ผลิตภัณฑ์และคุณสมบัติ</h1>
                        <div className="box my-6 px-4 py-4">
                        <p className='secondaryText text-white'>
                        แผ่นเอ็มดีเอฟเป็นผลิตภัณฑ์ที่มีคุณสมบัติใกล์เคียงไม้ธรรมชาติ
                        สามารถตัดตกแต่ง ตอกตะปู แต่งขอบและทำลิ้นร่องได้ ทำให้สามารถนำไปใช้งานแทนไม้ธรรมชาติ
                        ได้อย่างกว้างขวางทั้งในอุตสาหกรรมวัสดุก่อสร้าง งานตกแต่ง การผลิต
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* items product */}
                    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-4 xl:flex-nowrap">

                        <div className="item-product lg:w-[49%] mb-7 lg:mb-0">
                            <span className="text-md font-semibold">SKN Products</span>
                            <div className="flex justify-between mt-2">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-semibold">MDF</span>
                                    <span className="text-sm">Glue Type:</span>
                                    <span className="text-sm">E2/E1/CARB P2/E0</span>
                                </div>
                                <div className="">
                                    <Image src="/products-1.png" alt='product1' width={200} height={100}/>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <div className="flex flex-col">
                                    <span className="text-sm">Medium Density</span>
                                    <span className="text-sm">Fiberboard</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-sm">1MM - 30MM</span>
                                    <span className="text-sm">Standard size & Upon request</span>
                                </div>
                            </div>
                        </div>

                        <div className="item-product lg:w-[49%] mb-7 lg:mb-0">
                            <span className="text-md font-semibold">SKN Products</span>
                            <div className="flex justify-between mt-2">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-semibold">HMR<br/>MDF</span>
                                    <span className="text-sm">Glue Type:</span>
                                    <span className="text-sm">E2/E1/E0</span>
                                </div>
                                <div className="">
                                    <Image src="/products-2.png" alt='product2' width={200} height={100}/>
                                </div>
                            </div>
                            <div className="flex justify-between items-end mt-4">
                                <div className="flex flex-col">
                                    <span className="text-sm">High Moisture</span>
                                    <span className="text-sm">Resistance Medium</span>
                                    <span className="text-sm">Density Fiberboard</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-sm">1MM - 30MM</span>
                                    <span className="text-sm">Standard size & Upon request</span>
                                </div>
                            </div>
                        </div>


                        <div className="item-product lg:w-[49%] mb-7 lg:mb-0">
                            <span className="text-md font-semibold">SKN Products</span>
                            <div className="flex justify-between mt-2">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-semibold">FD<br/>MDF</span>
                                    <span className="text-sm">Glue Type:</span>
                                    <span className="text-sm">E2/E1</span>
                                </div>
                                <div className="">
                                    <Image src="/products-3.png" alt='product3' width={200} height={100}/>
                                </div>
                            </div>
                            <div className="flex justify-between items-end mt-4">
                                <div className="flex flex-col">
                                    <span className="text-sm">Fire Retardant</span>
                                    <span className="text-sm">Medium Density</span>
                                    <span className="text-sm">Fiberboard</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-sm">6MM - 30MM</span>
                                    <span className="text-sm">Standard size & Upon request</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
      
    </section>
  )
}

export default ProductsFeatures