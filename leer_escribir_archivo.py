import csv
def  leerDatos():
    with open('cordenadas.csv') as File:
        reader = csv.reader(File, delimiter=',', quotechar=',',
                        quoting=csv.QUOTE_MINIMAL)
    for row in reader:
        return(row)