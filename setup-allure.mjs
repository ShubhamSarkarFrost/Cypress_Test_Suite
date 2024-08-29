import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import os from 'os';
import { execSync } from 'child_process';

const allureVersion = '2.30.0'; // Specify the Allure version you want to install
const allureDownloadUrl = `https://github.com/allure-framework/allure2/releases/download/${allureVersion}/allure-${allureVersion}.zip`;
const allureDirectory = path.join(process.cwd(), 'allure');
const allureZipPath = path.join(process.cwd(), `allure-${allureVersion}.zip`);
const allureBinPath = 'C:\\allure\\bin';

// Function to download Allure
const downloadAllure = async () => {
    const response = await fetch(allureDownloadUrl);
    if (!response.ok) {
        throw new Error(`Failed to download Allure: ${response.statusText}`);
    }
    const fileStream = fs.createWriteStream(allureZipPath);
    await new Promise((resolve, reject) => {
        response.body.pipe(fileStream);
        response.body.on('error', reject);
        fileStream.on('finish', resolve);
    });
    console.log('Allure downloaded successfully.');
};

// Function to unzip Allure
const unzipAllure = () => {
    const zip = new AdmZip(allureZipPath);
    zip.extractAllTo(allureDirectory, true);
    console.log('Allure extracted successfully.');
    fs.unlinkSync(allureZipPath); // Clean up the ZIP file after extraction
};

// Function to set up Allure
const setupAllure = async () => {
    try {
        await downloadAllure();
        unzipAllure();
        console.log('Allure is Extracted in the following Folder move it to Root Directory.');
    } catch (error) {
        console.error('An error occurred during Allure setup:', error);
    }
};

// Run the setup function
setupAllure();