import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
    title = 'angular-datatables'
    rows = []
    constructor() {}

    ngOnInit(): void {
        this.fetch((data) => {
            this.rows = data
        })
    }

    fetch(cb) {
        const req = new XMLHttpRequest()
        req.open(
            'GET',
            `http://swimlane.github.io/ngx-datatable/assets/data/company.json`
        )

        req.onload = () => {
            const data = JSON.parse(req.response)
            cb(data)
        }

        req.send()
    }
}
