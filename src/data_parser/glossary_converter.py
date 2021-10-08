import pandas as pd
df = pd.read_csv ('src/data_parser/glossary.csv')
df.to_json ('src/data_parser/glossary.json', orient='records')