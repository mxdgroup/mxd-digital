#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/features
mkdir -p public/images/hero
mkdir -p public/images/logo
mkdir -p public/images/growth
mkdir -p public/images/clients
mkdir -p public/images/tools

# Download feature images
echo "Downloading feature images..."
curl -o public/images/features/team-of-experts.gif "https://mxd.digital/wp-content/uploads/2022/10/MXD-team-of-experts.gif"
curl -o public/images/features/expertise-and-support.gif "https://mxd.digital/wp-content/uploads/2022/10/MXD-expertise-and-support.gif"
curl -o public/images/features/partner-that-grows.gif "https://mxd.digital/wp-content/uploads/2022/10/MXD-partner-that-grows-cropped.gif"

# Download hero image
echo "Downloading hero image..."
curl -o public/images/hero/header-image.png "https://mxd.digital/wp-content/uploads/2024/09/MxD-Marketing-and-Digital-Solutions-Header-Image.png"

# Download logo
echo "Downloading logo..."
curl -o public/images/logo/logo-loop.gif "https://mxd.digital/wp-content/uploads/2022/08/MXD-Logo-Loop.gif"

# Download growth image
echo "Downloading growth image..."
curl -o public/images/growth/marketing-growth.gif "https://mxd.digital/wp-content/uploads/2022/10/MXD-marketing-growth.gif"

# Download client logos
echo "Downloading client logos..."
curl -o public/images/clients/hill-and-co.jpg "https://mxd.digital/wp-content/uploads/2023/12/Hill-and-Co.jpg"
curl -o public/images/clients/fresh-invest.jpg "https://mxd.digital/wp-content/uploads/2022/10/FreshInvest.jpg"
curl -o public/images/clients/cleartrip.jpg "https://mxd.digital/wp-content/uploads/2022/10/Cleartrip.jpg"
curl -o public/images/clients/flydubai.jpg "https://mxd.digital/wp-content/uploads/2022/10/flydubai-copy.jpg"
curl -o public/images/clients/ifeelgood.jpg "https://mxd.digital/wp-content/uploads/2022/10/ifeelgood-247.jpg"
curl -o public/images/clients/move-with-us.webp "https://mxd.digital/wp-content/uploads/2024/09/MWU_Logo_New-1.webp"
curl -o public/images/clients/viewpoint-feedback.webp "https://mxd.digital/wp-content/uploads/2024/09/viewpoint-feedback.webp"
curl -o public/images/clients/slantboard-guy.jpg "https://mxd.digital/wp-content/uploads/2022/10/Slantboad-Guy.jpg"

# Download tool logos
echo "Downloading tool logos..."
curl -o public/images/tools/meta.jpg "https://mxd.digital/wp-content/uploads/2022/08/Meta_Platforms-Logo.jpg"
curl -o public/images/tools/google-ads.jpg "https://mxd.digital/wp-content/uploads/2022/10/Ads-logo.jpg"
curl -o public/images/tools/salesforce.jpg "https://mxd.digital/wp-content/uploads/2022/08/Salesforce-logo.jpg"
curl -o public/images/tools/klaviyo.jpg "https://mxd.digital/wp-content/uploads/2022/08/Klaviyo-logo.jpg"
curl -o public/images/tools/hubspot.jpg "https://mxd.digital/wp-content/uploads/2022/08/Hubspot-logo.jpg"
curl -o public/images/tools/bigcommerce.jpg "https://mxd.digital/wp-content/uploads/2022/08/BigCommerce-logo.jpg"
curl -o public/images/tools/airtable.png "https://mxd.digital/wp-content/uploads/2022/08/Airtable-logo-1.png"
curl -o public/images/tools/hotjar.jpg "https://mxd.digital/wp-content/uploads/2022/10/hotjar-logo.jpg"

echo "All images downloaded successfully!" 