# PDF Support in Project Galleries

Your project galleries now support PDF files alongside images and videos!

## How to Add PDF Files

1. **Upload your PDF files** to `/public/documents/` folder (or any subfolder in `/public/`)

2. **Add PDF entries in your project markdown** files just like images:

```yaml
gallery: 
    enabled: 1
    items:
        - image: /img/portfolio/project2/photo1.jpg
          width: 1200
          height: 800
          alt: "Project Photo"

        # Add PDF like this:
        - image: /documents/project-presentation.pdf
          width: 800
          height: 600
          alt: "Project Presentation PDF"

        - image: /documents/technical-specs.pdf
          width: 800
          height: 600
          alt: "Technical Specifications"

    cols: 2
    style: "horizontal"
```

## Features

✅ **PDF Thumbnail** - Shows a PDF icon with the title  
✅ **Click to View** - Opens PDF in full-screen modal viewer  
✅ **Download Button** - Users can download the PDF  
✅ **Mobile Friendly** - Works on all devices  
✅ **Mixed Gallery** - Combine images, videos, and PDFs  

## Example Structure

```
public/
├── documents/
│   ├── project1/
│   │   ├── presentation.pdf
│   │   └── technical-specs.pdf
│   ├── project2/
│   │   └── design-mockups.pdf
│   └── project3/
│       └── case-study.pdf
└── img/
    └── portfolio/
        └── (your images)
```

## Tips

- **File Naming**: Use descriptive names like `white-house-presentation.pdf`
- **Alt Text**: Make it descriptive - users will see it on the thumbnail
- **File Size**: Keep PDFs under 10MB for faster loading
- **Organization**: Create subfolders for each project to keep files organized

## Testing

Visit any project page and you'll see:
- Images display normally
- PDFs show with a 📄 icon and "Click to view" text
- Clicking opens the PDF in a full-screen viewer
- Users can download or close the viewer
