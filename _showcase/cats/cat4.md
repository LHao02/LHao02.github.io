---
show: true
width: 12
date: 2019-01-12 00:01:00 +0800
group: Competition
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
  <img src="{{ '/assets/images/showcase/competition/1.jpg' | relative_url }}" class="rounded-xl" >
  <img src="{{ '/assets/images/showcase/competition/2.jpg' | relative_url }}" class="rounded-xl" >
  <img src="{{ '/assets/images/showcase/competition/3.jpg' | relative_url }}" class="rounded-xl" >
  <img src="{{ '/assets/images/showcase/competition/4.jpg' | relative_url }}" class="rounded-xl" >
</div>
