import { motion } from "framer-motion";
import "./style.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CampaignDetailsPC = () => {
  return (
    <div className="hidden md:block w-full relative bg-black min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='cyan' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        
        {/* Header Section - Campaign Timeline */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-2">
            <img 
              src="images/texttime.png" 
              alt="ระยะเวลาร่วมกิจกรรม" 
              className="w-full h-auto max-w-lg mx-auto object-contain"
            />
          </div>
          
          {/* Campaign Timeline Content */}
          <div className="p-8 text-[#24B6E0] max-w-5xl mx-auto">
            <p className="text-lg mb-6 leading-relaxed">
              กิจกรรมสร้างสรรค์คาถา ต่อ ติด ผี สามารถร่วมสนุกได้ตั้งแต่ วันที่ <span className="font-bold">29 กันยายน - 3 ตุลาคม 2568</span> และ
              <span className="font-bold">ประกาศผลผู้มีสิทธิ์ร่วมกิจกรรมลุยภารกิจ ต่อ ติด ผี วันที่ 8 ตุลาคม 2568 ผ่านช่องทาง Facebook: MY WORLD และ TikTok: MY WORLD</span>
                โดยผู้มีสิทธิ์ร่วมกิจกรรมจะต้องยืนยันสิทธิ์การเข้าร่วมผ่านช่องทาง inbox ของ Facebook หรือ TikTok ภายใน 17.00 น. ของวันที่ 10 ตุลาคม 2568
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left side - Campaign Visual */}
          <motion.div
            className="space-y-8"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main campaign visual */}
            <div className="text-center">
              <img 
                src="images/winner2.png" 
                alt="Winner Campaign Visual" 
                className="w-full h-auto max-w-lg mx-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right side - Prize Details */}
          <motion.div
            className="space-y-8"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Prize Header */}
            <div className="inline-flex items-center gap-4 bg-[#241E20] px-8 py-4 mb-8">
              <h2 className="text-4xl font-bold items-center justify-center text-white">รายละเอียด  <span className="text-[#24B6E0]">ของรางวัล</span></h2>
            </div>

            {/* Prize Details */}
            <div className=" p-8 text-white space-y-6">
              {/* Main Prize */}
              <div>
                <ul  className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                  <li>
                   ผู้ที่ร่วมสร้างสรรค์คาถา ต่อ ติด ผี ที่ทำถูกกติกา ลงคลิปภายในระยะเวลาจัดกิจกรรม และถูกใจคณะกรรมการฯ ที่สุด จะได้รับ MY World x คารามูโจ้ Tumbler มูลค่ารางวัลละ 390 บาท จำนวน 50 รางวัล
                  </li>

                  <li >
                    ผู้ที่ได้เข้าร่วมกิจกรรมลุยภารกิจ ต่อ ติด ผี รอบคัดเลือกจะได้รับเงินรางวัลสูงสุดคู่ละ 20,000 บาท ต่อรอบ
                  </li>
                  <li >
                    ผู้ที่ได้เข้าร่วมกิจกรรมลุยภารกิจ ต่อ ติด ผี รอบ Final Mission จะได้รับเงินรางวัลสูงสุดคู่ละ 80,000 บาท
                  </li>
                  <li >
                    รวมมูลค่าของรางวัลตลอดกิจกรรมสูงสุด 237,200 บาท
                  </li>
                </ul>
              </div>

              {/* Additional Info */}
              <div className="p-2">
                <h4 className="text-lg font-boldmb-3">หมายเหตุ:</h4>
                <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                  <li>ของรางวัล MY World x คารามูโจ้ Tumbler จะเริ่มทำการจัดส่ง ตั้งแต่วันที่ 15 ตุลาคม – 14 พฤศจิกายน 2568</li>
                  <li>ผู้โชคดีที่ได้รับรางวัลมีหน้าที่รับผิดชอบภาษีหัก ณ ที่จ่ายตามที่กฎหมายกำหนด</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPC;