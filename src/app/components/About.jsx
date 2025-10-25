export default function About({ lang }) {
  return (
    <section
      id="about"
      className="pt-10 pb-28  mt-24 w-full text-[#0f204e] bg-gray-100"
    >
      <div>
        {/* Section title */}
        <div className="flex justify-center items-center pb-8">
          <h2 className="text-4xl font-bold my-8 text-center text-white w-fit bg-[#0f204e] p-4">
            {lang === "en" ? "About Us" : "عن فيچين"}
          </h2>
        </div>

        {/* Content wrapper */}
        <div
          className={`flex flex-col xl:flex-row ${
            lang === "en" ? "xl:flex-row" : "xl:flex-row-reverse"
          } justify-between items-center gap-10`}
        >
          {/* Text section */}
          <div className="w-full xl:w-[70%] flex justify-center items-center px-4 lg:px-8">
            {lang === "en" ? (
              <p className="text-2xl font-bold text-[#0f204e] leading-relaxed  ">
                VISION Industries is one of the leading companies in the field
                of textiles, tailoring, and embroidery. We specialize in
                designing and producing various types of formal and casual wear
                with the highest levels of quality and precision.
                <br /> <br />
                We provide comprehensive solutions for uniforms and sportswear,
                in addition to manufacturing a wide range of products including
                shoes, bags (backpacks and laptop bags), belts, ties, and other
                accessories that meet the needs of companies and institutions
                across different sectors.
                <br /> <br />
                Our expertise also extends to supplying office equipment, making
                us a trusted partner for providing all workplace essentials
                under one roof — combining quality with commitment.
                <br /> <br />
                VISION Industries boasts a proven track record of collaboration
                with companies inside Egypt and abroad in the Gulf countries,
                Britain, and Austria. This reflects the trust we have earned
                thanks to our constant commitment to quality, precision in
                execution, and attention to detail to ensure our customers'
                satisfaction.
              </p>
            ) : (
              <p
                className="text-3xl sm:text-lg font-bold text-[#0f204e] leading-relaxed "
                dir="rtl"
              >
                تعد فيچين للصناعة من الشركات الرائدة في مجال صناعة المنسوجات
                والخياطة والتطريز، حيث نختص بتصميم وتنفيذ مختلف أنواع الأزياء
                الرسمية وغير الرسمية بمستويات عالية من الجودة والدقة.
                <br />
                <br />
                نقدم حلولًا متكاملة للزي الموحد والملابس الرياضية، بالإضافة إلى
                تصنيع منتجات متنوعة تشمل الأحذية، الشنط (ظهر – لابتوب)، الأحزمة،
                الكرفتات، وغيرها من المستلزمات التي تلبي احتياجات الشركات
                والمؤسسات بمختلف مجالاتها.
                <br />
                <br />
                كما تمتد خبراتنا لتشمل توريد الأدوات المكتبية، مما يجعلنا شريكًا
                موثوقًا لتوفير متطلبات العمل تحت مظلة واحدة تجمع بين الجودة
                والالتزام.
                <br />
                <br />
                تفتخر فيچين للصناعة بسجل حافل من التعاون مع شركات داخل مصر
                وخارجها في كل من دول الخليج وبريطانيا والنمسا، مما يعكس الثقة
                التي اكتسبناها بفضل التزامنا الدائم بالجودة، والدقة في التنفيذ،
                والحرص على رضا عملائنا في كل تفصيلة.
              </p>
            )}
          </div>

          {/* Image section */}
          <div className="w-full xl:w-[30%] flex justify-center items-center">
            <img
              src="/logo.jpg"
              alt="Vision Industries Logo"
              className="max-w-xs sm:max-w-sm md:max-w-md xl:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
