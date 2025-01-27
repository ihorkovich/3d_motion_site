const FooterAppeal = () => {
  const mobileContent = (
    <>
      <p>LET'S COLLABORATE AND CREATE</p>
      <p>SOMETHING EXTRAORDINARY</p>
      <p>TOGETHER!</p>
    </>
  );

  const desktopContent = (
    <>
      <p>LET'S COLLABORATE AND CREATE SOMETHING EXTRAORDINARY TOGETHER!</p>
    </>
  );

  return (
    <div>
      <div className="text-right text-xs md:hidden">{mobileContent}</div>
      <div className="hidden text-left text-sm md:block">{desktopContent} </div>
    </div>
  );
};

export default FooterAppeal;
