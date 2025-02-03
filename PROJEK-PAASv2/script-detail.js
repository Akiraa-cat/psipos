
const diseases = [

    {
      key: "mooddisorder",
      title: "Mood Disorder",
      description: "Stress adalah respons tubuh terhadap tekanan atau tantangan.",
      image: "https://i.pinimg.com/474x/e1/e6/8b/e1e68b3da7c7088b8d127b204550baf8.jpg", 
    },
    {
      key: "psychotic",
      title: "Stress",
      description: "Stress adalah respons tubuh terhadap tekanan atau tantangan.",
      image: "https://i.pinimg.com/474x/e1/e6/8b/e1e68b3da7c7088b8d127b204550baf8.jpg", 
    },
    {
      key: "icd",
      title: "Depresi",
      description: "Depresi adalah gangguan suasana hati yang ditandai dengan perasaan sedih yang mendalam.",
      image: "https://i.pinimg.com/474x/1b/9e/3d/1b9e3d578d404d2beba4293f34ccbbb1.jpg", 
    },
    {
      key: "ed",
      title: "Anxiety",
      description: "Kecemasan berlebih adalah kondisi di mana seseorang merasa khawatir atau takut secara berlebihan.",
      image: "https://i.pinimg.com/474x/c9/7b/9a/c97b9a7b53386d16639c258477e0de94.jpg", 
    },
    {
      key: "ocd",
      title: "Anxiety",
      description: "Kecemasan berlebih adalah kondisi di mana seseorang merasa khawatir atau takut secara berlebihan.",
      image: "https://i.pinimg.com/474x/c9/7b/9a/c97b9a7b53386d16639c258477e0de94.jpg", 
    },
    {
      key: "personality",
      title: "Anxiety",
      description: "Kecemasan berlebih adalah kondisi di mana seseorang merasa khawatir atau takut secara berlebihan.",
      image: "https://i.pinimg.com/474x/c9/7b/9a/c97b9a7b53386d16639c258477e0de94.jpg", 
    },
    {
      key: "pyschosomatic",
      title: "Anxiety",
      description: "Kecemasan berlebih adalah kondisi di mana seseorang merasa khawatir atau takut secara berlebihan.",
      image: "https://i.pinimg.com/474x/c9/7b/9a/c97b9a7b53386d16639c258477e0de94.jpg", 
    },    {
      key: "factitious",
      title: "Anxiety",
      description: "Kecemasan berlebih adalah kondisi di mana seseorang merasa khawatir atau takut secara berlebihan.",
      image: "https://i.pinimg.com/474x/c9/7b/9a/c97b9a7b53386d16639c258477e0de94.jpg", 
    },
    {
      key: "ptsd",
      title: "Anxiety",
      description: "Kecemasan berlebih adalah kondisi di mana seseorang merasa khawatir atau takut secara berlebihan.",
      image: "https://i.pinimg.com/474x/c9/7b/9a/c97b9a7b53386d16639c258477e0de94.jpg", 
    },
    {
      key: "depression",
      title: "Anxiety",
      description: "Kecemasan berlebih adalah kondisi di mana seseorang merasa khawatir atau takut secara berlebihan.",
      image: "https://i.pinimg.com/474x/c9/7b/9a/c97b9a7b53386d16639c258477e0de94.jpg", 
    },
  ];
  
  const urlParams = new URLSearchParams(window.location.search);
  const diseaseKey = urlParams.get("disease");
  
  const titleElement = document.getElementById("disease-title");
  const descriptionElement = document.getElementById("disease-description");
  const imageElement = document.getElementById("disease-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  const currentIndex = diseases.findIndex((d) => d.key === diseaseKey);
  
  if (currentIndex !== -1) {
    const disease = diseases[currentIndex];

    titleElement.textContent = disease.title;
    descriptionElement.textContent = disease.description;
    imageElement.src = disease.image;
    imageElement.alt = disease.title;
  
    if (currentIndex > 0) {
      prevBtn.href = `details.html?disease=${diseases[currentIndex - 1].key}`;
      prevBtn.classList.remove("disabled");
      prevBtn.textContent = `⬅ ${diseases[currentIndex - 1].title}`;
    }
  
    if (currentIndex < diseases.length - 1) {
      nextBtn.href = `details.html?disease=${diseases[currentIndex + 1].key}`;
      nextBtn.classList.remove("disabled");
      nextBtn.textContent = `${diseases[currentIndex + 1].title} ➡`;
    }
  } else {
    titleElement.textContent = "Not Found";
    descriptionElement.textContent = "The requested disease information is not available.";
    imageElement.style.display = "none";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
  