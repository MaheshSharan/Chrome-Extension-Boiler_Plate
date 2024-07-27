@echo off
setlocal enabledelayedexpansion

rem Define the output file
set outputFile=combined_output.txt

rem Clear the output file if it exists
if exist %outputFile% del %outputFile%

rem Define the list of files to copy from
set files=(
    "public\popup.html"
    "public\options.html"
    "src\background\index.ts"
    "src\content\index.ts"
    "src\popup\index.tsx"
    "src\popup\Popup.tsx"
    "src\options\index.tsx"
    "src\options\Options.tsx"
    "src\styles\popup.css"
    "src\styles\options.css"
    "public\manifest.json"
    "webpack\webpack.common.js"
    "webpack\webpack.dev.js"
    "webpack\webpack.prod.js"
    "package.json"
    "tsconfig.json"
    ".gitignore"
)

rem Loop through each file and append its content to the output file
for %%F in (
    public\popup.html
    public\options.html
    src\background\index.ts
    src\content\index.ts
    src\popup\index.tsx
    src\popup\Popup.tsx
    src\options\index.tsx
    src\options\Options.tsx
    src\styles\popup.css
    src\styles\options.css
    public\manifest.json
    webpack\webpack.common.js
    webpack\webpack.dev.js
    webpack\webpack.prod.js
    package.json
    tsconfig.json
    .gitignore
) do (
    echo ####### %%F ######### >> %outputFile%
    type %%F >> %outputFile%
    echo. >> %outputFile%  rem Add a new line for better separation
)

echo All files have been combined into %outputFile%.
endlocal