const data = [
  {
    img: 'assets/img/achivements/1.png',
    headset: 'assets/img/achivements/1.png',
    link:
      'https://google.qwiklabs.com/public_profiles/0b121f29-66b3-4398-82c1-4adac5870ac9/badges/1170092',
  },
  {
    img: 'assets/img/achivements/2.png',
    headset: 'assets/img/achivements/2.png',
    link:
      'https://google.qwiklabs.com/public_profiles/0b121f29-66b3-4398-82c1-4adac5870ac9/badges/1165079l',
  },
  {
    img: 'assets/img/achivements/3.png',
    headset: 'assets/img/achivements/3.png',
    link:
      'https://google.qwiklabs.com/public_profiles/0b121f29-66b3-4398-82c1-4adac5870ac9/badges/1163558',
  },
  {
    img: 'assets/img/achivements/4.png',
    headset: 'assets/img/achivements/4.png',
    link:
      'https://google.qwiklabs.com/public_profiles/0b121f29-66b3-4398-82c1-4adac5870ac9/badges/833426',
  },
  {
    img: 'assets/img/achivements/5.png',
    headset: 'assets/img/achivements/5.png',
    link:
      'https://google.qwiklabs.com/public_profiles/0b121f29-66b3-4398-82c1-4adac5870ac9/badges/832927',
  },
  {
    img: 'assets/img/achivements/6.png',
    headset: 'assets/img/achivements/6.png',
    link:
      'https://google.qwiklabs.com/public_profiles/0b121f29-66b3-4398-82c1-4adac5870ac9/badges/830543',
  },
  {
    img: 'assets/img/achivements/7.png',
    headset: 'assets/img/achivements/7.png',
    link:
      'https://google.qwiklabs.com/public_profiles/0b121f29-66b3-4398-82c1-4adac5870ac9/badges/721218',
  },
  {
    img: 'assets/img/achivements/8.png',
    headset: 'assets/img/achivements/8.png',
    link:
      'https://google.qwiklabs.com/public_profiles/0b121f29-66b3-4398-82c1-4adac5870ac9/badges/738420',
  },
  {
    img: 'assets/img/achivements/9.jpeg',
    headset: 'assets/img/achivements/9.jpeg',
    link: 'assets/img/achivements/9.jpeg',
  },
  {
    img: 'assets/img/achivements/12.jpeg',
    headset: 'assets/img/achivements/12.jpeg',
    link: 'assets/img/achivements/12.jpeg',
  },
  {
    img: 'assets/img/achivements/15.png',
    headset: 'assets/img/achivements/15.png',
    link: 'assets/img/achivements/15.png',
  },
  {
    img: 'assets/img/achivements/13.jpeg',
    headset: 'assets/img/achivements/13.jpeg',
    link: 'assets/img/achivements/13.jpeg',
  },
  {
    img: 'assets/img/achivements/10.jpeg',
    headset: 'assets/img/achivements/10.jpeg',
    link: 'assets/img/achivements/10.jpeg',
  },
  {
    img: 'assets/img/achivements/16.jpeg',
    headset: 'assets/img/achivements/16.jpeg',
    link: 'assets/img/achivements/16.jpeg',
  },
  {
    img: 'assets/img/achivements/excom.jpeg',
    headset: 'assets/img/achivements/excom.jpeg',
    link: 'assets/img/achivements/excom.jpeg',
  },
  {
    img: 'assets/img/achivements/11.jpeg',
    headset: 'assets/img/achivements/11.jpeg',
    link: 'assets/img/achivements/11.jpeg',
  },
  {
    img: 'assets/img/achivements/reboot.jpeg',
    headset: 'assets/img/achivements/reboot.jpeg',
    link: 'assets/img/achivements/reboot.jpeg',
  },
]

for (let i = 0; i < data.length; i++) {
  document.getElementById('achivements').innerHTML += `
    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                src="${data[i]['img']}"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <a
                    href="${data[i]['headset']}"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                  >
                    <i class="bi bi-headset-vr"></i>
                  </a>
                  <a
                    href="${data[i]['link']}
                    "
                    title="More Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
    
    `
}
