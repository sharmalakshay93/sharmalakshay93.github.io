---
title: "Learning Administrative Boundary-Aware Location Encoders via Reverse Geocoding"
collection: publications
category: conferences
permalink: /publication/2026-10-16-reverse-geocoding-location-encoders
date: 2026-10-16
venue: 'arXiv'
link: 'https://arxiv.org/abs/2610.24306'
authors: 'Lakshay Sharma, Alex Marin'
images:
  - file: 'revgeo-fig.png'
    alt: 'Training pipeline: coordinates pass through a location encoder and RQVAE, trained to reconstruct the text-encoder embedding of the reverse-geocoded place name'
  - file: 'revgeo-map.png'
    alt: 'World map colored by first-level semantic ID code, with regions roughly following continental and administrative boundaries'
citation: 'Lakshay Sharma, Alex Marin. (2026). &quot;Learning Administrative Boundary-Aware Location Encoders via Reverse Geocoding.&quot; <i>arXiv preprint</i>.'
---

We use reverse-geocoded text alongside semantic IDs as self-supervised training signals so that location encoders learn administrative boundaries and place names. This improves existing encoder architectures, and our RevGeoRQ architecture outperforms contemporary location encoders on several downstream tasks. The human-readable reverse-geocoded strings and discrete semantic IDs also make the learned representations more interpretable.
