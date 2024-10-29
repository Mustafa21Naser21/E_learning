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

<div style={{width:'35%'}} className="right-category mt-10">

<div className="add-left w-72 h-20 bg-greenYellow mt-6 rounded-3xl mr-12 relative add1">
    <h2 className="text-white text-center text-xl pt-4"> <Link to='/categorytitle'>الفئة الاولى</Link></h2>
</div>
<div className="add-left w-72 h-20 bg-green mt-6 rounded-3xl mr-12 relative add3">
    <h2 className="text-white text-center text-xl pt-4">الفئة الثالثة</h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-6 rounded-3xl mr-12 relative add5">
    <h2 className="text-white text-center text-xl pt-4">الفئة الخامسة</h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-6 rounded-3xl mr-12 relative add7">
    <h2 className="text-white text-center text-xl pt-4">الفئة السابعة</h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-6 rounded-3xl mr-12 relative add9">
    <h2 className="text-white text-center text-xl pt-4">الفئة التاسعة</h2>
</div>


</div>

<div style={{width:'30%'}} className="center-category flex justify-between mb-20">

<div className=" py-10 mx-4 mt-52 "> <h1 className="text-3xl text-center  ">تقرير نماذج التعلم الالكتروني الكامل عن بعد والمدمج 2024</h1> </div>


</div>

<div style={{width:'35%',marginLeft:'-5%'}} className="left-category mt-10">

<div className="add-left w-72 h-20 bg-greenYellow mt-6  rounded-3xl mr-16 relative add2">
<h2 className="text-white text-center text-xl pt-4">الفئة الثانية</h2>  
</div>
<div className="add-left w-72 h-20 bg-green mt-6  rounded-3xl mr-16 relative add4">
<h2 className="text-white text-center text-xl pt-4">الفئة الرابعة</h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-6  rounded-3xl mr-16 relative add6 ">
<h2 className="text-white text-center text-xl pt-4">الفئة السادسة</h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-6  rounded-3xl mr-16 relative add8 ">
<h2 className="text-white text-center text-xl pt-4">الفئة الثامنة</h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-6  rounded-3xl mr-16 relative add10 ">
<h2 className="text-white text-center text-xl pt-4">الفئة العاشرة</h2>
</div>


</div>

</div>


        <div className="add-category-mobile hidden  mt-24  justify-between ">

        <div className="text-center px-4">
   <h1 className="text-3xl text-center  ">تقرير نماذج التعلم الالكتروني الكامل عن بعد والمدمج 2024</h1> 
   </div>

       <div style={{width:'35%'}} className="right-category mt-12">

<div className="add-left w-72 h-20 bg-greenYellow mt-6 rounded-3xl mr-12 relative add1">
    <h2 className="text-white text-center text-lg pt-4"><Link to='/categorytitle'>الفئة الاولى</Link></h2>
</div>
<div className="add-left w-72 h-20 bg-green mt-6 rounded-3xl mr-12 relative add2">
    <h2 className="text-white text-center text-lg pt-4">الفئة الثانية</h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-6 rounded-3xl mr-12 relative add3">
    <h2 className="text-white text-center text-lg pt-4">الفئة الثالثة</h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-6 rounded-3xl mr-12 relative add4">
    <h2 className="text-white text-center text-lg pt-4">الفئة الرابعة</h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-6 rounded-3xl mr-12 relative add5">
    <h2 className="text-white text-center text-lg pt-4">الفئة الخامسة</h2>
</div>


</div>


<div style={{width:'35%',marginLeft:'-5%'}} className="left-category mt-12">

<div className="add-left w-72 h-20 bg-greenYellow mt-6  rounded-3xl mr-16 relative add6">
<h2 className="text-white text-center text-lg pt-4">الفئة السادسة</h2>  
</div>
<div className="add-left w-72 h-20 bg-green mt-6  rounded-3xl mr-16 relative add7">
<h2 className="text-white text-center text-lg pt-4">الفئة السابعة</h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-6  rounded-3xl mr-16 relative add8 ">
<h2 className="text-white text-center text-lg pt-4">الفئة الثامنة</h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-6  rounded-3xl mr-16 relative add9 ">
<h2 className="text-white text-center text-lg pt-4">الفئة التاسعة</h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-6  rounded-3xl mr-16 relative add10 ">
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