import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    messages = [
    { from: 'atendente', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { from: 'atendente', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { from: 'you', text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Consequuntur nisi nemo veritatis sint. Non nostrum ipsa illo ut
                          maiores esse, quas cumque? Dolorem odio assumenda sequi soluta
                          sunt laborum dolores!` },
  ];

  newMessage = '';

  sendMessage(chatContent: HTMLElement) {
    if (!this.newMessage.trim()) return;

    this.messages.push({
      from: 'you',
      text: this.newMessage.trim()
    });

    this.newMessage = '';

    setTimeout(() => {
      chatContent.scrollTop = chatContent.scrollHeight;
    });
  }

}
