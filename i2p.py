import img2pdf


def i2pconverter(file):
    pdfname = file.split('.')[0]+'convert'+'.pdf'
    with open(pdfname, 'wb') as f:
        f.write(img2pdf.convert(file))