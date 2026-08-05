import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-black overflow-hidden`}>
      
      {/* Simple Glowing Background Only */}
      <div className="absolute inset-0">
        {/* Purple glow effects */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 300 + 200 + 'px',
              height: Math.random() * 300 + 200 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              background: `radial-gradient(circle, rgba(147, 51, 234, ${Math.random() * 0.15 + 0.05}) 0%, transparent 70%)`,
              filter: 'blur(50px)',
              animationDuration: Math.random() * 6 + 3 + 's',
              opacity: Math.random() * 0.2 + 0.1,
            }}
          />
        ))}

        {/* Small glowing dots */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full bg-[#915EFF] animate-pulse"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              boxShadow: '0 0 10px #915EFF, 0 0 20px #915EFF',
              animationDuration: Math.random() * 3 + 2 + 's',
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        {/* Stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.4,
            }}
          />
        ))}
      </div>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Kishore Kumar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a passionate <span className='text-[#915EFF]'>Data Analyst</span> 
            <br className='sm:block hidden' />
            transforming data into actionable insights
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;