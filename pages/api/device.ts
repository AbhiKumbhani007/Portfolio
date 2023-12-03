// pages/api/device.js

export default (req: any, res: any) => {
  const userAgent = req.headers["user-agent"];

  // Check if the user-agent string contains keywords indicative of mobile devices
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile) {
    res.json({ deviceType: 0 });
  } else {
    res.json({ deviceType: 1 });
  }
};
