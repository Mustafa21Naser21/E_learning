
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import HeaderViewer from './HeaderViewer';
export default function CategoryContentEditor() {

    function deleteTerm(){
        Swal.fire({
            title: "تنبيه",
            text: "سوف يتم حذف جميع المرفقات الخاصة في البند عند حذفه ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "حذف",
            cancelButtonText: "تراجع"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "تم الحذف بنجاح",
                text: "تم",
                icon: "success"
              });
            }
          });
    }
  return (

    <>

    <HeaderViewer />

     <section>

        <div className="category-content  relative">

            <div className="category-title mt-10">
                <div className="mt-10 px-10">
                    <h1  className="text-5xl font-bold max-sm:text-4xl">عنوان الفئة :</h1>
                    <h1  className="text-2xl h-auto mt-4 ">لللل</h1>
                </div>
                 <div className="mt-10 px-10">
                    <h1  className=" text-5xl font-bold max-sm:text-4xl">وصف الفئة :</h1>
                    <h1  className=" text-2xl h-auto  mt-4 ">لللل</h1>
                </div>
                <div className='mt-10  px-10'>
                    <h1 className="text-5xl font-bold max-sm:text-4xl" >البنود :</h1>
                
                </div>
            </div>

            <div className='flex justify-center mt-20'>
                <button className='w-40 h-16 px-6 py-2  bg-header text-white text-3xl  rounded-lg'> <Link to='/addtermeditor'>اضافة بند</Link></button>
                </div>

            <div className="terms mt-10 mb-10 grid grid-cols-3  justify-items-center">

                <div className="term-down term-1 mt-20 w-60 h-60 bg-darkBlue relative  ">

                    <div className='flex justify-between'>
                        <div className="icon-term text-white mt-2 mr-2">
                        <i onClick={deleteTerm} className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
                        </div>
                        <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
                            1
                        </div>
                    </div>

                    <h2 className='text-center text-white mt-6 h-44 text-xl px-2'> <Link to='/termcontent'> التعليمية بتوفير
 اسس واجراءات
 واضحة للتعلم
 الالكتروني</Link>
</h2>

                </div>

                <div className="term-down term-2 mt-20 w-60 h-60 bg-green relative ">

<div className='flex justify-between'>
               <div className="icon-term text-white mt-2 mr-2">

                        <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
                        </div>

                <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        2
               </div>
</div>

<h2 className='text-center text-white mt-6 hh-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>

<div className="term-down term-3 mt-20 w-60 h-60 bg-purple relative ">

<div className='flex justify-between'>
               <div className="icon-term text-white mt-2 mr-2">
               <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
             </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        3
    </div>
</div>

<h2 className='text-center text-white mt-6 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>



<div className="term-up mt-72 term-4 w-60 h-60 bg-red relative  ">


    <h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلمالتعليمية بتوفير
اسس واجراءات
واضحة للتعلمالتعليمية بتوفير
اسس واجراءات
 للتعلمللتع
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
        <div className="icon-term text-white mb-2 mr-2">
        <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
        </div>
        <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
            4
        </div>
    </div>

</div>



<div className="term-up mt-72 term-5 w-60 h-60 bg-teal relative  ">


    <h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
        <div className="icon-term text-white mb-2 mr-2">
        <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
        </div>
        <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
           5
        </div>
    </div>

</div>   

<div className="term-up mt-72 term-6 w-60 h-60 bg-greenYellow relative  ">


    <h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
        <div className="icon-term text-white mb-2 mr-2">
        <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
        </div>
        <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
            6
        </div>
    </div>

</div>

<div className="term-down term-1 mt-20 w-60 h-60 bg-darkBlue relative  ">

<div className='flex justify-between'>
    <div className="icon-term text-white mt-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        7
    </div>
</div>

<h2 className='text-center text-white mt-6 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>

<div className="term-down term-2 mt-20 w-60 h-60 bg-green relative ">

<div className='flex justify-between'>
<div className="icon-term text-white mt-2 mr-2">

    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>

<div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
8
</div>
</div>

<h2 className='text-center text-white mt-6 hh-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>

<div className="term-down term-3 mt-20 w-60 h-60 bg-purple relative ">

<div className='flex justify-between'>
<div className="icon-term text-white mt-2 mr-2">
<i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
</div>
<div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
9
</div>
</div>

<h2 className='text-center text-white mt-6 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>


<div className="term-up mt-72 term-4 w-60 h-60 bg-red relative  ">


<h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلمالتعليمية بتوفير
اسس واجراءات
واضحة للتعلمالتعليمية بتوفير
اسس واجراءات
للتعلمللتع
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
    <div className="icon-term text-white mb-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        10
    </div>
</div>

</div>



<div className="term-up mt-72 term-5 w-60 h-60 bg-teal relative  ">


<h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
    <div className="icon-term text-white mb-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
       11
    </div>
</div>

</div>   

<div className="term-up mt-72 term-6 w-60 h-60 bg-greenYellow relative  ">


<h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
    <div className="icon-term text-white mb-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        12
    </div>
</div>

</div>

            </div>

            <div className="terms-mobile  hidden mt-10 mb-10  justify-items-center">

            <div className="term-down term-1 mt-20 w-60 h-60 bg-darkBlue relative  ">

<div className='flex justify-between'>
    <div className="icon-term text-white mt-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        1
    </div>
</div>

<h2 className='text-center text-white mt-6 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>

<div className="term-up mt-72 term-4 w-60 h-60 bg-red relative  ">


    <h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلمالتعليمية بتوفير
اسس واجراءات
واضحة للتعلمالتعليمية بتوفير
اسس واجراءات
 للتعلمللتع
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
        <div className="icon-term text-white mb-2 mr-2">
        <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
        </div>
        <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
            2
        </div>
    </div>

</div>

<div className="term-down term-2 mt-20 w-60 h-60 bg-green relative ">

<div className='flex justify-between'>
               <div className="icon-term text-white mt-2 mr-2">

                        <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
                        </div>

                <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        3
               </div>
</div>

<h2 className='text-center text-white mt-6 hh-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>

<div className="term-up mt-72 term-5 w-60 h-60 bg-teal relative  ">


    <h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
        <div className="icon-term text-white mb-2 mr-2">
        <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
        </div>
        <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
           4
        </div>
    </div>

</div>

<div className="term-down term-3 mt-20 w-60 h-60 bg-purple relative ">

<div className='flex justify-between'>
               <div className="icon-term text-white mt-2 mr-2">
               <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
             </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        5
    </div>
</div>

<h2 className='text-center text-white mt-6 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>

<div className="term-up mt-72 term-6 w-60 h-60 bg-greenYellow relative  ">


    <h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
        <div className="icon-term text-white mb-2 mr-2">
        <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
        </div>
        <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
            6
        </div>
    </div>

</div>

<div className="term-down term-1 mt-20 w-60 h-60 bg-darkBlue relative  ">

<div className='flex justify-between'>
    <div className="icon-term text-white mt-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        7
    </div>
</div>

<h2 className='text-center text-white mt-6 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>

<div className="term-up mt-72 term-4 w-60 h-60 bg-red relative  ">


<h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلمالتعليمية بتوفير
اسس واجراءات
واضحة للتعلمالتعليمية بتوفير
اسس واجراءات
للتعلمللتع
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
    <div className="icon-term text-white mb-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
       8
    </div>
</div>

</div>

<div className="term-down term-2 mt-20 w-60 h-60 bg-green relative ">

<div className='flex justify-between'>
<div className="icon-term text-white mt-2 mr-2">

    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>

<div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
9
</div>
</div>

<h2 className='text-center text-white mt-6 hh-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>

<div className="term-up mt-72 term-5 w-60 h-60 bg-teal relative  ">


<h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
    <div className="icon-term text-white mb-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
       10
    </div>
</div>

</div>   

<div className="term-down term-3 mt-20 w-60 h-60 bg-purple relative ">

<div className='flex justify-between'>
<div className="icon-term text-white mt-2 mr-2">
<i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
</div>
<div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
11
</div>
</div>

<h2 className='text-center text-white mt-6 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

</div>


<div className="term-up mt-72 term-6 w-60 h-60 bg-greenYellow relative  ">


<h2 className='text-center text-white mt-6 mb-2 h-44 text-xl px-2'>تلتزم المؤسسة
التعليمية بتوفير
اسس واجراءات
واضحة للتعلم
الالكتروني</h2>

<div className='icon-number-term-up flex justify-between'>
    <div className="icon-term text-white mb-2 mr-2">
    <i className="fa-solid fa-trash cursor-pointer ml-4"/><i className="fa-solid fa-pen-to-square cursor-pointer "/>
    </div>
    <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
        12
    </div>
</div>

</div>

            </div>

        </div>
    </section>


    </>

  )
}