---
show: true
width: 12
date: 2020-01-12 00:01:00 +0800
group: Sichuan Artificial Intelligence Institute
---
<style>
  .running-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }
  .running-grid img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  .running-grid .img-zoom-wrapper {
    overflow: hidden;
    border-radius: 0.75rem;
  }
  .running-grid .img-zoom-wrapper .special-img {
    transform: scale(1.16);
    transform-origin: center;
  }
  @media (max-width: 768px) {
    .running-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 480px) {
    .running-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
<div class="running-grid">
  <div class="img-zoom-wrapper">
    <img src="{{ 'assets\images\showcase\AI_school\3.JPG' | relative_url }}" class="special-img" >
  </div>
  <img src="{{ 'assets/images/showcase/AI_school/2.JPG' | relative_url }}" class="rounded-xl" >
  <img src="{{ 'assets/images/showcase/AI_school/1.JPG' | relative_url }}" class="rounded-xl" >
  <img src="{{ 'assets/images/showcase/AI_school/4.JPG' | relative_url }}" class="rounded-xl" >
</div>
