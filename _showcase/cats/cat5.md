---
show: true
width: 12
date: 2018-01-12 00:01:00 +0800
group: Other
---
<style>
  .running-grid {
    column-count: 4;
    column-gap: 8px;
  }
  .running-grid .photo-item {
    padding: 0;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    break-inside: avoid;
    margin: 0 0 8px;
    display: inline-block;
    width: 100%;
  }
  .running-grid img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    .running-grid {
      column-count: 2;
    }
  }
  @media (max-width: 480px) {
    .running-grid {
      column-count: 1;
    }
  }
</style>
<div class="running-grid">
  <div class="photo-item">
    <img data-src="{{ 'assets/images/showcase/Other/2.jpg' | relative_url }}" class="lazy rounded-xl" src="{{ '/assets/images/empty_300x200.svg' | relative_url }}">
  </div>
  <div class="photo-item">
    <img data-src="{{ 'assets/images/showcase/Other/1.jpg' | relative_url }}" class="lazy rounded-xl" src="{{ '/assets/images/empty_300x200.svg' | relative_url }}">
  </div>
  <div class="photo-item">
    <img data-src="{{ 'assets/images/showcase/Other/4.jpg' | relative_url }}" class="lazy rounded-xl" src="{{ '/assets/images/empty_300x200.svg' | relative_url }}">
  </div>
  <div class="photo-item">
    <img data-src="{{ 'assets/images/showcase/Other/3.jpg' | relative_url }}" class="lazy rounded-xl" src="{{ '/assets/images/empty_300x200.svg' | relative_url }}">
  </div>
</div>