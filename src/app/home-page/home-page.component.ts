import { Component } from '@angular/core';
import { ProfileBriefComponent } from "../profile-brief/profile-brief.component";
import { RecentVisitComponent } from "../recent-visit/recent-visit.component";
import { AddPostComponent } from "../add-post/add-post.component";
import { FeedComponent } from "../feed/feed.component";
import { AddFollowingsComponent } from "../add-followings/add-followings.component";
import { AppHeaderComponent } from "../app-header/app-header.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [ProfileBriefComponent, RecentVisitComponent, AddPostComponent, FeedComponent, AddFollowingsComponent, AppHeaderComponent]
})
export class HomePageComponent {

}
