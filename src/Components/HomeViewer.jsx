import { Link } from "react-router-dom";
import Footer from './Footer'
import HeaderViewer from './HeaderViewer'
import SectionPhotos from  './SectionPhotos'


export default function HomeViewer () {
  return (


    <>
    <HeaderViewer />
    <SectionPhotos />

    <section>

    <div className="add-category  mt-24 flex justify-between ">

<div style={{width:'35%'}} className="right-category mt-8">

<div className="add-left w-72 h-20 bg-greenYellow mt-2 rounded-3xl mr-12 relative add1">
    <h2 className="text-white text-center text-lg p-2 max-lg:text-base"> <Link to='/categorytitle'>الفئة الاولى</Link></h2>
</div>
<div className="add-left w-72 h-20 bg-green mt-2 rounded-3xl mr-12 relative add3">
    <h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة الثالثة</h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-2 rounded-3xl mr-12 relative add5">
    <h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة الخامسة</h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-2 rounded-3xl mr-12 relative add7">
    <h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة السابعة</h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-2 rounded-3xl mr-12 relative add9">
    <h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة التاسعة</h2>
</div>


</div>

<div  className="center-category grid grid-cols-1 justify-items-center  mb-20">

<div style={{width:'70%'}} className=" mt-20 mb-4 "> <h1 className="text-3xl text-center ">تقرير نماذج التعلم الالكتروني الكامل عن بعد والمدمج 2024</h1> </div>
<div style={{marginTop:'-4rem'}}> <img   src="/src/images/packge-box.png" alt="" /></div>

</div>

<div style={{width:'35%',marginLeft:'-5%'}} className="left-category mt-8">

<div className="add-left w-72 h-20 bg-greenYellow mt-2  rounded-3xl mr-16 relative add2">
<h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة الثانية</h2>  
</div>
<div className="add-left w-72 h-20 bg-green mt-2  rounded-3xl mr-16 relative add4">
<h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة الرابعة</h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-2  rounded-3xl mr-16 relative add6 ">
<h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة السادسة</h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-2  rounded-3xl mr-16 relative add8 ">
<h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة الثامنة</h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-2  rounded-3xl mr-16 relative add10 ">
<h2 className="text-white text-center text-lg p-2 max-lg:text-base">الفئة العاشرة</h2>
</div>


</div>

</div>


        <div className="add-category-mobile hidden  mt-24  justify-between ">

    <div className="text-center px-8">
   <h1 className="text-3xl ">تقرير نماذج التعلم الالكتروني الكامل عن بعد والمدمج 2024</h1> 
   </div>

 <div className="grid grid-cols-1 justify-items-center mt-12">

<div className="add-left w-72 h-20 bg-greenYellow mt-4 rounded-3xl  relative add1">
    <h2 className="text-white text-center text-lg p-2 max-lg:text-base"><Link to='/categorytitle'>الفئة الاولى</Link></h2>
</div>
<div className="add-left w-72 h-20 bg-green mt-4 rounded-3xl  relative add2">
    <h2 className="text-white text-center text-lg pt-4">الفئة الثانية</h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-4 rounded-3xl  relative add3">
    <h2 className="text-white text-center text-lg pt-4">الفئة الثالثة</h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-4 rounded-3xl  relative add4">
    <h2 className="text-white text-center text-lg pt-4">الفئة الرابعة</h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-4 rounded-3xl relative add5">
    <h2 className="text-white text-center text-lg pt-4">الفئة الخامسة</h2>
</div>
<div className="add-left w-72 h-20 bg-greenYellow mt-4  rounded-3xl  relative add6">
<h2 className="text-white text-center text-lg pt-4">الفئة السادسة</h2>  
</div>
<div className="add-left w-72 h-20 bg-green mt-4  rounded-3xl  relative add7">
<h2 className="text-white text-center text-lg pt-4">الفئة السابعة</h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-4  rounded-3xl  relative add8 ">
<h2 className="text-white text-center text-lg pt-4">الفئة الثامنة</h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-4  rounded-3xl  relative add9 ">
<h2 className="text-white text-center text-lg pt-4">الفئة التاسعة</h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-4  rounded-3xl  relative add10 ">
<h2 className="text-white text-center text-lg pt-4">الفئة العاشرة</h2>
</div>


</div>




</div>

      
    </section>

    <Footer />
    </>


  )
}


/* 
<div className="py-10 pr-20 mt-20 w-3/4 img-cateory "><img className="" src="/src/images/packge-box.png" alt="" /></div>
*/

/*
        
*/