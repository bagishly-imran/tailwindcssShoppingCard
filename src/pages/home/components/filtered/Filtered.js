import React, { useState } from 'react'
import './sass/filtered.scss';

const Filtered = () => {

  const [openAccordion, setOpenAccordion] = useState([1, 2, 3, 4, 5, 6]);


  return (
    <div className='w-[200px] flex flex-col gap-3'>
      <div className = 'accordion-content border-b w-full'>
        <button 
          onClick={() => {openAccordion.includes(1)  ? setOpenAccordion(openAccordion.filter(item => item !== 1)) : setOpenAccordion([...openAccordion, 1])}}
          className = 'text-[#ff0000] w-full pb-2 flex justify-between items-center'
        >
          İlgili Kategoriler
          <span className = 'accordion-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
        <div className = {`accordion-body flex flex-col gap-3  overflow-hidden ${openAccordion.includes(1) ? 'h-auto py-2' : 'h-0'}`}>
          <div className = 'flex justify-between'>
            <span>Kazak</span>
            <span className = 'text-[#696969]'>3</span>
          </div>
          <div className = 'flex justify-between'>
            <span> Pantolon</span>
            <span className = 'text-[#696969]'>3</span>
          </div>
          <div className = 'flex justify-between'>
            <span> Jean</span>
            <span className = 'text-[#696969]'>3</span>
          </div>
          <div className = 'flex justify-between'>
            <span>  Kaban</span>
            <span className = 'text-[#696969]'>3</span>
          </div>
          <div className = 'flex justify-between'>
            <span> T-Shirt</span>
            <span className = 'text-[#696969]'>3</span>
          </div>
          <div className = 'flex justify-between'>
            <span> Elbise</span>
            <span className = 'text-[#696969]'>3</span>
          </div>
        </div>
      </div>
      {/* Accordion two */}
      <div className = 'accordion-content border-b w-full'>
        <button 
          onClick={() => {openAccordion.includes(2)  ? setOpenAccordion(openAccordion.filter(item => item !== 2)) : setOpenAccordion([...openAccordion, 2])}}
          className = 'text-[#ff0000] pb-2 w-full flex justify-between items-center'
        >
          Cinsiyet
          <span className = 'accordion-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
        <div className = {`accordion-body flex flex-col gap-3  overflow-hidden ${openAccordion.includes(2)  ? 'h-auto py-2' : 'h-0'}`}>
          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Kadın</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          
          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Erkek</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Çocuk</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          

        </div>
      </div>

      {/* Accordion three */}
      <div className = 'accordion-content border-b w-full'>
        <button 
          onClick={() => {openAccordion.includes(3)  ? setOpenAccordion(openAccordion.filter(item => item !== 3)) : setOpenAccordion([...openAccordion, 3])}}
          className = 'text-[#ff0000] pb-2 w-full flex justify-between items-center'
        >
          Beden
          <span className = 'accordion-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
        <div className = {`accordion-body flex flex-col gap-3  overflow-hidden ${openAccordion.includes(3)  ? 'h-auto py-2' : 'h-0'}`}>
          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">XS</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          
          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">S</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">M</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">L</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">XL</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">XXL</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          

        </div>
      </div>
      {/* Accordion four */} 
      <div className = 'accordion-content border-b w-full'>
        <button 
          onClick={() => {openAccordion.includes(4)  ? setOpenAccordion(openAccordion.filter(item => item !== 4)) : setOpenAccordion([...openAccordion, 4])}}
          className = 'text-[#ff0000] pb-2 w-full flex justify-between items-center'
        >
          Yaş oranı
          <span className = 'accordion-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
        <div className = {`accordion-body flex flex-col gap-3  overflow-hidden ${openAccordion.includes(4)  ? 'h-auto py-2' : 'h-0'}`}>
          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">3-6 AY</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          
          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">6-9 AY</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">9-12 AY</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">18-24 AY</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">2-3 Yaş</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">c</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          

        </div>
      </div>
      {/* Accordion five */}
      <div className = 'accordion-content border-b w-full'>
        <button 
          onClick={() => {openAccordion.includes(5)  ? setOpenAccordion(openAccordion.filter(item => item !== 5)) : setOpenAccordion([...openAccordion, 5])}}
          className = 'text-[#ff0000] pb-2 w-full flex justify-between items-center'
        >
          Renk
          <span className = 'accordion-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
        <div className = {`accordion-body flex flex-col gap-3  overflow-hidden ${openAccordion.includes(5)  ? 'h-auto py-2' : 'h-0'}`}>
          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-a style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Beyaz</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-c style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Bej</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-d style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Mor</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-e style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Mavi</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-f style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Yeşil</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-g style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Kırmızı</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-h style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Sarı</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-i style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Kahverengi</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-k style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">Pembe</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          


        </div>
      </div>
      {/* Accordion six */}
      <div className = 'accordion-content border-b w-full'>
        <button 
          onClick={() => {openAccordion.includes(6)  ? setOpenAccordion(openAccordion.filter(item => item !== 6)) : setOpenAccordion([...openAccordion, 6])}}
          className = 'text-[#ff0000] pb-2 w-full flex justify-between items-center'
        >
          Fiyat Aralığı
          <span className = 'accordion-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
        <div className = {`accordion-body flex flex-col gap-3  overflow-hidden ${openAccordion.includes(6)  ? 'h-auto py-2' : 'h-0'}`}>

          <div className = 'flex items-end gap-1'>
            
            <div className = 'price-filter-input w-[70px]'>
              <label htmlFor='input-min' className = 'text-[#A5A5A5]'>Min TL</label>
              <input className = 'p-2 outline-none bg-[#fff] border border-[#E6E6E6] rounded-[6px] w-full' id = 'input-min' placeholder='0'/>
            </div>

            <div className = 'h-[66px] flex items-end pb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
            </div>


            <div className = 'price-filter-input w-[70px]'>
              <label htmlFor='input-max' className = 'text-[#A5A5A5]'>Max TL</label>
              <input className = 'p-2 outline-none bg-[#fff] border border-[#E6E6E6] rounded-[6px] w-full' id = 'input-max' placeholder='0'/>
            </div>

            <button className = 'text-[#fff] bg-[#ff0000] p-2 border border-[#ff0000] rounded-[4px] w-[60px] flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">0 TL - 20 TL</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          
          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">20 TL - 30 TL</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">30 TL - 50 TL</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">50 TL - 70 TL</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">70 TL - 125 TL</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>

          <div className = 'flex justify-between'>
            
            <div className="checkboxes__row">
              <div className="checkboxes__item">
                <label className="checkbox style-b">
                  <input type="checkbox"/>
                  <div className="checkbox__checkmark"></div>
                  <div className="checkbox__body">125 TL - 400 TL</div>
                </label>
              </div>
            </div>

            <span className = 'text-[#696969]'>3</span>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Filtered