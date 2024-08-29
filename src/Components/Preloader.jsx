import ContentLoader from "react-content-loader";

function Preloader() {
  const width = window.innerWidth;
  return (
   <>
<ContentLoader
  speed={3}
  width={width < 600 ? width : 600}
  // width={400}
  height={160}
  viewBox="0 0 ${width < 600 ? width : 600} 160"
  backgroundColor="#b43f95"
  foregroundColor="#ecebeb"
>
<circle cx="200" cy="50" r="30" />
    {/* Rectangles */}
    <rect x="150" y="100" rx="3" ry="3" width={width < 600 ? width - 90 : 210} height="10" />
    <rect x="150" y="120" rx="3" ry="3" width={width < 600 ? width - 90 : 220} height="10" />
    <rect x="140" y="140" rx="3" ry="3" width={width < 600 ? width - 90 : 225} height="10" />
  
   
    {/* You can add more shapes as needed */}
</ContentLoader>
<ContentLoader
  speed={3}
  width={400}
  height={160}
  viewBox="0 0 400 160"
  backgroundColor="#b43f95"
  foregroundColor="#eceh9b"
>
<circle cx="200" cy="50" r="30" />
    {/* Rectangles */}
    <rect x="150" y="100" rx="3" ry="3" width="250" height="10" />
    <rect x="150" y="120" rx="3" ry="3" width="240" height="10" />
    <rect x="140" y="140" rx="3" ry="3" width="250" height="10" />
  
   
    {/* You can add more shapes as needed */}
</ContentLoader>
<ContentLoader
  speed={3}
  width={400}
  height={160}
  viewBox="0 0 400 160"
  backgroundColor="#b43f95"
  foregroundColor="#ecebeb"
>
<circle cx="200" cy="50" r="30" />
    {/* Rectangles */}
    <rect x="150" y="100" rx="3" ry="3" width="250" height="10" />
    <rect x="150" y="120" rx="3" ry="3" width="240" height="10" />
    <rect x="140" y="140" rx="3" ry="3" width="250" height="10" />
  
   
    {/* You can add more shapes as needed */}
</ContentLoader>
   </>
  )
}

export default Preloader