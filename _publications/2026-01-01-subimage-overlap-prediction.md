---
title: "Subimage Overlap Prediction: Task-Aligned Self-Supervised Pretraining For Semantic Segmentation In Remote Sensing Imagery"
collection: publications
category: conferences
permalink: /publication/2026-01-01-subimage-overlap-prediction
date: 2026-01-01
venue: 'WACV 2026 Workshop: Computer Vision For Earth Observation (CV4EO)'
note: 'Also accepted at [NeurIPS 2026 Workshop: Advances in Representation Learning for Earth Observation (REO-2)](https://reo-workshop.org/2026/), Highlights Track'
link: 'https://openaccess.thecvf.com/content/WACV2026W/CV4EO/html/Sharma_Subimage_Overlap_Prediction_Task-Aligned_Self-Supervised_Pretraining_For_Semantic_Segmentation_In_WACVW_2026_paper.html'
pdf: 'https://openaccess.thecvf.com/content/WACV2026W/CV4EO/papers/Sharma_Subimage_Overlap_Prediction_Task-Aligned_Self-Supervised_Pretraining_For_Semantic_Segmentation_In_WACVW_2026_paper.pdf'
bibtex: |
  @InProceedings{Sharma_2026_WACV,
      author    = {Sharma, Lakshay and Marin, Alex},
      title     = {Subimage Overlap Prediction: Task-Aligned Self-Supervised Pretraining For Semantic Segmentation In Remote Sensing Imagery},
      booktitle = {Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) Workshops},
      month     = {March},
      year      = {2026},
      pages     = {1414-1423}
  }
authors: 'Lakshay Sharma, Alex Marin'
image: 'subimage-fig.png'
image_alt: 'Pretraining task: a subimage is cropped from an aerial image, and the model, given both, predicts a mask of where the subimage lies, supervised by its true location'
citation: 'Lakshay Sharma, Alex Marin. (2026). &quot;Subimage Overlap Prediction: Task-Aligned Self-Supervised Pretraining For Semantic Segmentation In Remote Sensing Imagery.&quot; <i>WACV 2026 Workshop: CV4EO</i>.'
---

We propose a self-supervised pretraining task for remote sensing imagery: predicting where a sub-image is located within its source image. It speeds up convergence and matches or beats other SSL methods on semantic segmentation while using far less pretraining data.
