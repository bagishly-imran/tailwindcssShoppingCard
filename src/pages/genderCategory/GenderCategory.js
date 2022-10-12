import React from 'react'
import { Link } from 'react-router-dom'

const GenderCategory = () => {
  return (
    <div className = 'gender-category-content'>
        <div className = 'gender-category-body py-3 container mx-auto'>

            <div className = 'gender-category-btns flex gap-3'>
                <button className = 'p-2 text-[#fff] bg-[#ff0000] w-[120px] rounded-[4px]'>
                    Kadın
                </button>

                <button className = 'p-2 text-[#ff0000] border border-[#ff0000] bg-[#fff] w-[120px] rounded-[4px]'>
                    Erkek
                </button>

                <button className = 'p-2 text-[#ff0000] border border-[#ff0000] bg-[#fff] w-[120px] rounded-[4px]'>
                    Çocuk
                </button>
            </div>

            <div className = 'gender-alt-category py-4 flex justify-between'>

                <div className = 'flex flex-col gap-2'>
                    <h1 className = 'text-[#ff0000] text-lg'>Giyim</h1>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000]'>Elbise</Link>
                    <Link to ='/' className = 'text-sm hover:text-[#ff0000] hover:underline'>T-shirt</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Bluz & Tunik</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Gömlek</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Kazak & Hırka</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Kaban & Mont</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Ceket & Yelek</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Sweatshirt</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Pantolon</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Jean</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Büyük Beden</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Tesettür</Link>
                </div>

                <div className = 'flex flex-col gap-2'>
                    <h1 className = 'text-[#ff0000] text-lg'>Kozmetik & Kişisel</h1>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000]'>Bakım</Link>
                    <Link to ='/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Parfüm & Deodorant</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Göz Makyajı</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Güneş Ürünleri</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Cilt Bakım</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Ten Makyajı</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Dudak Makyajı</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Saç Bakım</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Cinsel Sağlık</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Kadın Hijyen</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Tıraş & Ağda</Link>
                </div>

                <div className = 'flex flex-col gap-2'>
                    <h1 className = 'text-[#ff0000] text-lg'>Spor & Outdoor</h1>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000]'>Sweatshirt</Link>
                    <Link to ='/' className = 'text-sm hover:text-[#ff0000] hover:underline'>T-shirt</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Spor Sütyeni</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Tayt</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Eşofman</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Koşu Ayakkabısı</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Spor Çantası</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Spor Ekipmanları</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Outdoor Ayakkabı</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Outdoor Ekipmanları</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Sporcu Besinleri</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Kayak</Link>
                </div>

                <div className = 'flex flex-col gap-2'>
                    <h1 className = 'text-[#ff0000] text-lg'>İç Giyim</h1>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000]'>Pijama Takımı</Link>
                    <Link to ='/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Sütyen</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'> İç Çamaşırı Takımları</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Fantezi Giyim</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Gecelik</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Çorap</Link>
                </div>

                <div className = 'flex flex-col gap-2'>
                    <h1 className = 'text-[#ff0000] text-lg'>Ayakkabı</h1>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000]'>Topuklu Ayakkabı</Link>
                    <Link to ='/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Sneaker</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'> Bot & Çizme</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Günlük Ayakkabı</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Babet</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Ev Terliği & Botu</Link>
                </div>

                <div className = 'flex flex-col gap-2'>
                    <h1 className = 'text-[#ff0000] text-lg'>Aksesuar & Çanta</h1>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000]'>Çanta </Link>
                    <Link to ='/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Güneş Gözlüğü</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'> Saat</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Takı</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Atkı & Bere & Eldiven</Link>
                </div>

                <div className = 'flex flex-col gap-2'>
                    <h1 className = 'text-[#ff0000] text-lg'>Lüks & Designer</h1>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000]'>Lüks Çanta</Link>
                    <Link to ='/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Lüks Giyim</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'> Lüks Ayakkabı</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Tasarım Giyim</Link>
                    <Link to = '/' className = 'text-sm hover:text-[#ff0000] hover:underline'>Tasarım Ayakkabı</Link>
                </div>


            </div>

        </div>

    </div>
  )
}

export default GenderCategory