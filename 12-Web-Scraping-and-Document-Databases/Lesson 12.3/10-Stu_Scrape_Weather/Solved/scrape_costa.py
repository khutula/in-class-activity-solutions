from splinter import Browser
from bs4 import BeautifulSoup as bs
import time
from webdriver_manager.firefox import GeckoDriverManager


def scrape_info():
    # Set up Splinter
    executable_path = {'executable_path': GeckoDriverManager().install()}
    browser = Browser('firefox', **executable_path, headless=False)

    # Visit visitcostarica.herokuapp.com
    url = "https://visitcostarica.herokuapp.com/"
    browser.visit(url)

    time.sleep(1)

    # Scrape page into Soup
    html = browser.html
    soup = bs(html, "html.parser")

    # Get the average temps
    weather = soup.body.find_all("strong")

    # Get the min avg temp
    min_temp = weather[1].text.strip()

    # Get the max avg temp
    max_temp = weather[2].text.strip()

    # BONUS: Find the src for the sloth image
    sloth_img = soup.body.find_all("img", class_="animals")[1]["src"]
    sloth_img = url + sloth_img

    # Store data in a dictionary
    costa_data = {
        "sloth_img": sloth_img,
        "min_temp": min_temp,
        "max_temp": max_temp
    }

    # Quite the browser after scraping
    browser.quit()

    # Return results
    return costa_data
