import { Component, OnInit, Input } from '@angular/core';
import "./assets/github_contributions.js";
import { Http } from '@angular/http';
import { CommitService } from './services/commit.service';

declare const $: any;

@Component({
    selector: 'git-graph',
    templateUrl: './git-graph.component.html',
    styleUrls: [
        './git-graph.component.css'
    ]
})
export class GitGraphComponent implements OnInit {
    public _username: string;
    public graph: string;
    public contributions: string;
    @Input("proxy")
    public proxy: string = "http://localhost:9090/";
    @Input("proxy-options")
    public proxy_options: string = "";

    constructor(private http: Http, private commits: CommitService) { }

    ngOnInit() {

    }

    @Input("username")
    public set username(username: string) {
        this._username = username;
        if(username!==undefined && username !== null) {
            this.commits.commitCount(username,this.proxy,this.proxy_options).subscribe(
                commits => this.contributions = commits
            );
            this.commits.commitGraph(username,this.proxy,this.proxy_options).subscribe(
                graph => this.graph = graph
            )
        }
    }

}


