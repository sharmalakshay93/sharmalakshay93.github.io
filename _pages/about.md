---
permalink: /
title: "Bio"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a Senior Applied Scientist / ML Engineer at [Instacart](https://www.instacart.com/) on the Logistics ML / AI team, where I work on deep learning models for accurate delivery ETA prediction.

Previously, I was an Applied Scientist at [Microsoft](https://www.microsoft.com/) on the [Bing Maps AI](https://www.microsoft.com/en-us/maps) team, where I worked on a range of computer vision and geospatial machine learning problems including representation learning from aerial and street-view imagery, object detection, semantic segmentation, traffic prediction, and building LLM-powered agentic systems for urban navigation. Before Microsoft, I was a Software Engineer at [Amazon](https://www.amazon.com/) where I worked on scene-boundary detection and video copyright infringement classification for Prime Video, as well as APIs, storage, and monitoring solutions.

My research interests span computer vision, vision-language models, self-supervised learning, and remote sensing. I have co-authored academic papers published at venues including WACV, ICLR, and ICML workshops, and hold a US patent with another pending. I received my M.S. in Computer Science from [NYU Courant](https://cs.nyu.edu/) and my B.Tech. in Electronics & Communication Engineering from [Delhi Technological University](http://www.dtu.ac.in/).

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

<a name="publications"></a>

{% include base_path %}

{% if site.publication_category %}
{% for category in site.publication_category %}
{% assign title_shown = false %}
{% for post in site.publications reversed %}
{% if post.category != category[0] %}
{% continue %}
{% endif %}
{% unless title_shown %}
<h2>{{ category[1].title }}</h2><hr />
{% assign title_shown = true %}
{% endunless %}
{% include archive-single.html %}
{% endfor %}
{% endfor %}
{% else %}
{% for post in site.publications reversed %}
{% include archive-single.html %}
{% endfor %}
{% endif %}


## Patents

**Lakshay Sharma** et al. *Temporal Localization of Mature Content in Long-Form Videos Using Only Video-Level Labels*. US Patent 11829413. <br/> [Patent](https://patents.google.com/patent/US11829413B1)

**Lakshay Sharma** et al. *Generating Improved Traffic Speed Data for Road Segments in a Geographical Area Using Traffic Speed Prediction Neural Networks*. Patent in filed/pending status (United States).


## Awards

- Winner of Best Technical Hack @ Microsoft Global Hackathon 2021 (for Subimage Overlap Prediction work)
- 1st place winner @ AWS DeepLens Hackathon for trash classification computer vision model; featured on [AWS Blog](https://aws.amazon.com/blogs/machine-learning/building-a-trash-sorter-with-aws-deeplens/) and [AWS YouTube](https://youtu.be/Ut1VGG6TOOw)
- Placed 13/96 in iMet2020 dataset classification challenge at CVPR 2020 Workshop on Fine-Grained Visual Categorization
- Toyota Motor Corporation Scholarship, awarded by International House NYC and Toyota


## Service

- Peer reviewer / program committee member for multiple workshops/conferences including AAAI 2025, AAAI 2026, WACV 2025
