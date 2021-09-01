# to run all
npm run protractor

# run all in multithread
npm run protractor -- --tags '@all' --instances 2

# to run only search
npm run protractor -- --tags '@search'

# for myself
cucumber-json-merge [options] --dir 'C:/AM/module_11/module_11/test/reports/json-output-folder'--out './test/reports/merged-test-results.xml' --createDir=true
