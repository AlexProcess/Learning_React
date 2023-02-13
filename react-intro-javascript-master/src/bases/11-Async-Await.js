
try {
    const getImagen = async () => {
      const apiKey = "HCbuhpP36ETcw9AhfHxAI45yDStWWHqq";
      const resp = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const {data} = await resp.json();
    
      const { url } = data.images.original;
      
      const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
      
    };
    getImagen();
    
  } catch (error) {
    console.error(error)
  }
  
  
  