import pandas as pds

data = pds.read_excel('as1.xlsx')
df = pds.DataFrame(data, columns=['Product', 'Title', 'Name', 'Age'])

df.loc[((df['Age'].isnull()) & (df['Title'] == ('Mrs.'))), 'Age'] = 40

