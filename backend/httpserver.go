// Author: Harsh Nayyar
// Copyright 2022 - PocketHealth

package main

import (
	"encoding/json"
	"html/template"
	"net/http"
)

var LISTENING_PORT = "8080"

type SubscribeConfirmPage struct {
	Name   string
	Email  string
	Tel    string
	Colour string
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func handleSubscribeConfirm(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	if r.Method == "POST" {
		subscribeConfirmPage := SubscribeConfirmPage{
			Name:   r.FormValue("name"),
			Email:  r.FormValue("email"),
			Tel:    r.FormValue("tel"),
			Colour: r.FormValue("colour"),
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(subscribeConfirmPage)
	} else {
		w.Header().Set("Allow", "POST")
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
}

func handleDefault(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("tmpl/default.html")
	t.Execute(w, "")
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", handleDefault)
	mux.HandleFunc("/api/subscribeconfirm", handleSubscribeConfirm)
	mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))

	// specify listening port
	server := &http.Server{Addr: ":" + LISTENING_PORT, Handler: mux}
	// start the server, listening to LISTENING_PORT
	server.ListenAndServe()
}
