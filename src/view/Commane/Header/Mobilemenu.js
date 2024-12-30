import { useState } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};
const menuVariants = {
  open: {
    clipPath: "inset( -30% -30% -30% -30% round 400px )",
    // "inset(0% 0% 0% 0% round 110px 22px 110px 110px)",
    // clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    // clipPath: "inset(10% 50% 90% 50% round 10px)",
    // clipPath: "inset(-40% 80% -40% 10% round 10px)",
    clipPath: "inset(0% 0% 100% 100% round 0px)",
    //   "inset(4% 3% 83% 80% round 110px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const data = [
  { item: "Item 1" },
  { item: "Item 2" },
  { item: "Item 3" },
  { item: "Item 4" },
  { item: "Item 5" },
];

function Menus() {
  const [isOpens, setIsOpens] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Icon
        animate={isOpens ? "open" : "closed"}
        transition={{ duration: 0.2 }}
        style={{ originY: 0.55 }}
        onClick={() => setIsOpens(!isOpens)}
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <motion.path
            fill="none"
            stroke={isOpens ? "black" : "white"}
            strokeWidth="3"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 4 8 L 26 8" }, // Hamburger top line
              open: { d: "M 6 6 L 24 24" }, // Cross top-left to bottom-right
            }}
            animate={isOpens ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.path
            fill="none"
            stroke={isOpens ? "black" : "white"}
            strokeWidth="3"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 4 15 L 26 15" }, // Hamburger middle line
              open: { d: "" }, // Middle line disappears
            }}
            animate={isOpens ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.path
            fill="none"
            stroke={isOpens ? "black" : "white"}
            strokeWidth="3"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 4 22 L 26 22" }, // Hamburger bottom line
              open: { d: "M 6 24 L 24 6" }, // Cross bottom-left to top-right
            }}
            animate={isOpens ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </Icon>

      <UL
        variants={menuVariants}
        initial="closed"
        animate={isOpens ? "open" : "closed"}
      >
        {data.map((item) => (
          <LI key={item.item} variants={itemVariants}>
            {item.item}
          </LI>
        ))}
      </UL>
    </div>
  );
}

const Mobilemenu = () => {
  return (
    <div>
      <Menus />
    </div>
  );
};

const Icon = styled(motion.div)`
  padding-right: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const UL = styled(motion.ul)`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 300px;
  width: 400px;
  background-color: var(--bg-menu);
  border-radius: 0px 0px 0px 300px;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform-origin: left;
  pointer-events: ${(props) => (props.isOpens ? "auto" : "none")};
  padding: 50px 0px;
  @media (max-width: 1126px) {
    height: 270px;
    width: 370px;
    padding-top: 40px;
  }
  @media (max-width: 980px) {
    height: 230px;
    width: 310px;
  }
  @media (max-width: 786px) {
    height: 200px;
    width: 280px;
  }
  @media (max-width: 540px) {
    height: 170px;
    width: 240px;
  }
  @media (max-width: 400px) {
    height: 150px;
    width: 220px;
  }
`;

const LI = styled(motion.li)`
  width: 40%;
  font-size: 40px;
  color: var(--bg-menu-text);
  text-align: end;
  @media (max-width: 1126px) {
    font-size: 35px;
  }
  @media (max-width: 980px) {
    font-size: 30px;
  }
  @media (max-width: 786px) {
    font-size: 25px;
  }
  @media (max-width: 540px) {
    font-size: 2 0px;
  }
`;
export default Mobilemenu;
