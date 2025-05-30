const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token || token !== process.env.API_SECRET) {
      console.log(token, process.env)
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    next();
  };
  
  export default authenticate;