#!/bin/bash
# Create _redirects file for Netlify SSR routing
set -e
echo "Creating _redirects file in dist/"
echo "/* /.netlify/functions/ssr 200!" > dist/_redirects
echo "_redirects file created successfully"
