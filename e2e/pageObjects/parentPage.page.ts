import {Locator, Page} from "@playwright/test";
import URLS from "../test-data/urls.enum";

class ParentPage {
    async click(element: Locator): Promise<void> {
        await element.waitFor()
        await element.click()
    }

    async fillInput(element: Locator, value: string): Promise<void> {
        await element.waitFor()
        await element.fill(value)
    }

    async waitForElementVisible(element: Locator): Promise<void> {
        await element.waitFor({state: 'visible'})
    }

    async waitForElementToDisappear(element: Locator): Promise<void> {
        await element.waitFor({state: 'hidden'})
    }

    async visit(page: Page, url: URLS): Promise<void> {
        await page.goto(url)
        await page.waitForURL(url)
        await page.waitForLoadState('load')
    }
}

export default ParentPage;